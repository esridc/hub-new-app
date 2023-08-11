import { Component, Host, Prop, State, h } from '@stencil/core';
import { setAssetPath } from "@esri/calcite-components/dist/components";
import { searchItems, SearchQueryBuilder } from "@esri/arcgis-rest-portal";

setAssetPath("https://js.arcgis.com/calcite-components/1.4.3/assets");

@Component({
  tag: 'hub-new-app',
  styleUrl: 'hub-new-app.css',
  shadow: true,
})
export class HubNewApp {

  @Prop() username: string = 'aturner';
  modal: HTMLCalciteModalElement;
  // private shellPanelEl:HTMLCalciteShellPanelElement;
  @State() newAppSelected:boolean = false;

  @State() newAppTimestamp: Date = null;
  @State() existingItems = [];

  render() {
    return (
      <Host>
        <slot></slot>
        <calcite-modal
          id="modal"
          scale="m"
          width="m"
          ref={(el) => this.modal = el as HTMLCalciteModalElement}
        >
          <div slot="header">
            Add an Application
          </div>
          <div id="content" slot="content">
            
            {this.renderContent()}

          </div>
        </calcite-modal>
        {this.renderNewButton()}
      </Host>
    );
  }
  openModal() {
    this.modal.open = true;
  }

  componentWillLoad() {
    this.checkforExistingContent();

    setInterval(() => {
      this.checkforExistingContent();
    }, 5000);
    setInterval(() => {
      this.checkForNewContent();
    }, 1000);
  }
  async checkforExistingContent() {

    // Existing Apps

    const query = new SearchQueryBuilder()            
          .match(this.username).in("owner")
          .and()
          .startGroup()
          // TODO enumerate over all builders
            .match("StoryMap").in("type")
            .or()
            .match("Dashboard").in("type")
            .or()
            .match("Web Mapping Application").in("type")
          .endGroup()

    await searchItems({
      q: query,
      sortOrder: "desc",
      sortField: "created"
    }).then((response) => {
      this.existingItems = response.results;
    })
  }

  async checkForNewContent() {
    if(!this.newAppTimestamp) {
      return;
    }

    // New App
    const startDate = this.newAppTimestamp;
    // const startDate = new Date("2020-09-01");
    const endDate = new Date("2030-09-01");
    console.log("timestamp", {startDate, endDate})

    const query = new SearchQueryBuilder()
          .from(startDate)
          .to(endDate)
          .in("created")
          .and()
          .match(this.getBuilder(this.appType).type).in("type")
          .and()
          .match(this.username).in("owner")

    let items = [];
    await searchItems({
      q: query,
      sortOrder: "desc",
      sortField: "created"
    }).then((response) => {
      items = response.results;
    })
    
    if(items.length > 0) {
      this.app = items[0];
      // Stop timer!
      this.newAppTimestamp = null;
    }
  }

  

  renderGallery() {
    const cards = this.existingItems?.map((item) => {
      return (
        <calcite-card class="app">
          <span slot="title">
            {item.title}
          </span>
          <span slot="subtitle">
            {item.snippet}
          </span>
          <calcite-chip slot="footer-start" value={item.type} appearance="outline-fill" kind="neutral" icon="add-in">
            {item.type}
          </calcite-chip>
          <calcite-button slot="footer-end" href={this.getBuilder(item.type).view + item.id} target="_new" appearance='outline'>
            Open App
          </calcite-button>  
          <calcite-button slot="footer-end" href="javascript:window.alert('Add App')" appearance='solid'>
              Add App
          </calcite-button>
        </calcite-card>
      )
    })
    console.log("items", {items: this.existingItems, cards})

    return (
      <div>
        {cards}
      </div>
    )
  }

  @State() app: any = null;
  @State() showNewApp: boolean = false;
  @State() showSelectApp: boolean = true;
  
  renderContent() {
    return (
      <calcite-shell>
        <calcite-shell-panel 
          // ref={(el) => this.shellPanelEl = el} 
          collapsed={true} 
          slot="panel-start" 
          position="start" 
          id="shell-panel-start"
          >
            <calcite-action-bar slot="action-bar">
                <calcite-action 
                  // ref={(el) => this.actionMapEl = el} 
                  active={this.showSelectApp}
                  indicator={this.showSelectApp}
                  onClick={() => { this.showSelectApp = true; this.showNewApp = !this.showSelectApp}}
                  icon="search" 
                  text="Existing App" 
                  ></calcite-action>
                <calcite-action 
                  // ref={(el) => this.actionChannelsEl = el} 
                  active={this.showNewApp}
                  indicator={this.showNewApp}
                  onClick={() => { this.showNewApp = true; this.showSelectApp = !this.showNewApp}}
                  text="New App" 
                  icon="add-in-new"></calcite-action>                  
            </calcite-action-bar>
        </calcite-shell-panel>
        <calcite-panel heading={this.showNewApp ? `Create a New App` : `Search for Apps`}>
              {this.showNewApp ? this.renderNewContent() :  this.renderGallery()}
            </calcite-panel>
    </calcite-shell>
    )
  }
  renderNewContent() {
    if(!!this.app) {
      return this.renderApp();
    }

    if(!this.newAppTimestamp) {
      return this.renderNewOptions();
    }


    // Nothing else, so loading!
    return this.renderLoading(); 
  }
  renderApp() {
    return (
      <calcite-card class="app">
        <span slot="title">
        <calcite-label>
          App Title
          <calcite-input placeholder="Enter App Title" value={this.app.title}></calcite-input>
        </calcite-label>
 
          
        </span>
        <span slot="subtitle">
        <calcite-label>
          App Summary
          <calcite-input placeholder="Enter App Title" value={this.app.snippet}></calcite-input>
        </calcite-label>       
        </span>
        <calcite-chip slot="footer-start" value={this.app.type} appearance="outline-fill" kind="neutral" icon="add-in">
        {this.app.type}
        </calcite-chip>
        <calcite-button slot="footer-end" href="javascript:window.alert('Open Workspace')" appearance='outline'>
            Manage App
        </calcite-button>
        <calcite-button slot="footer-end" href={this.getBuilder(this.appType).view + this.app.id} target="_new">
            Add App
        </calcite-button>

      <strong>Add App to the Catalog</strong>
      <calcite-label layout="inline">
      <calcite-checkbox checked></calcite-checkbox>
        Add to Parks Content Group
    </calcite-label>
    <calcite-label layout="inline">
        <calcite-checkbox checked></calcite-checkbox>
        Add to Parks Collaboration Group
    </calcite-label>
    <calcite-button href='#' appearance='outline'>
      Choose other groups
    </calcite-button>
    </calcite-card>
    )
  }

  @State() appType: string = null;
  private builders = [
    {
      name: "StoryMap",
      type: "StoryMap",
      key: "storymap",
      new: "https://storymaps.arcgis.com/stories/new",
      view: "https://storymaps.arcgis.com/stories/"
    },{
      name: "Dashboard",
      type: "Dashboard",
      key: "dashboard",
      new: "https://dcdev.maps.arcgis.com/apps/dashboards/new",
      view: "https://storymaps.arcgis.com/stories/"
    },{
      name: "Instant App",
      type: "Web Mapping Application",
      key: "instant",
      new: "https://dcdev.maps.arcgis.com/apps/instantgallery/index.html?tab=browseAll",
      view: "https://storymaps.arcgis.com/stories/"
    }
  ]
  private defaultBuilder = {
    name: "ArcGIS Online",
    type: "None",
    key: "ago",
    new: "https://dcdev.maps.arcgis.com/home/",
    view: "https://dcdev.maps.arcgis.com/home/items.html?id="
  }

  renderLoading() {
    return(
      <calcite-loader 
        label="Waiting for a new app to be created..." 
        text="Waiting for a new app to be created..."
        type="indeterminate"></calcite-loader>
    )
  }
  renderNewButton() {
    return (
      <calcite-button
        appearance="solid"
        color="blue"
        scale="l"
        
        onClick={() => this.openModal()}
      >
        Add an App
      </calcite-button>
    );
  }
  newAppOpen(type: string) {
    this.newAppTimestamp = new Date();
    this.newAppSelected = true;
    this.appType = type;
    console.debug("newAppOpen", {type, new: this.getBuilder(this.appType)})
    window.open(this.getBuilder(this.appType).new, "_blank");
  }

  getBuilder(type: string) {
    let builder = this.builders.filter((builder) => {
      return builder.key === type;
    })
    if(builder.length === 0) {
      builder = [this.defaultBuilder]
    }
    return builder[0]
  }
  renderNewOptions() {
    return([
     <div class="new-options">
        {this.builders.map((builder) => {
          return (
            <calcite-button
              appearance="solid"
              color="blue"
              onClick={() => this.newAppOpen(builder.key)}
            >
              New {builder.name}
            </calcite-button>
          )
        })}
      </div>,
        <calcite-notice open icon="layers-reference">
        <div slot="title">Create and then Embed</div>
        <div slot="message">Choose a builder that will open in a new tab. When you save that App then it will be available here.",</div>
        <calcite-link slot="link" title="my action">
            Read more
        </calcite-link>
    </calcite-notice>  
    ]
    )
  }

}
