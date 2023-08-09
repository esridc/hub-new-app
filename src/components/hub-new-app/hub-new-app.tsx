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
  private shellPanelEl:HTMLCalciteShellPanelElement;
  @State() newAppSelected:boolean = false;

  @State() newAppTimestamp: Date = null;

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
            Create a new Application
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
    setInterval(() => {
      this.checkForContent();
    }, 1000);
  }
  async checkForContent() {
    if(!this.newAppTimestamp) {
      return;
    }

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
          .match("aturner").in("owner")

    let items = [];
    await searchItems(query).then((response) => {
      items = response.results;
    })
    
    if(items.length > 0) {
      this.app = items[0];
    }
  }

  @State() app: any = null;
  @State() showNewApp: boolean = true;
  @State() showSelectApp: boolean = false;
  
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
                  // ref={(el) => this.actionChannelsEl = el} 
                  onClick={() => { this.showNewApp = true; this.showSelectApp = !this.showNewApp}}
                  active={this.showNewApp}
                  text="New App" 
                  icon="add-in-new" indicator></calcite-action>
                <calcite-action 
                  // ref={(el) => this.actionMapEl = el} 
                  active={this.showSelectApp}
                  onClick={() => { this.showSelectApp = true; this.showNewApp = !this.showSelectApp}}
                  icon="search" 
                  text="Existing App"></calcite-action>
            </calcite-action-bar>
        </calcite-shell-panel>
        <calcite-panel heading={this.showNewApp ? `Create a New App` : `Search for Apps`}>
              {this.showNewApp ? this.renderNewContent() :  "Gallery here"}
            </calcite-panel>
    </calcite-shell>
    )
  }
  renderNewContent() {

    if(!this.newAppTimestamp) {
      return this.renderNewOptions();
    }
    if(!!this.app) {
      return this.renderApp();
    }

    // Nothing else, so loading!
    return this.renderLoading(); 
  }
  renderApp() {
    return (
      <calcite-card class="app">
        <span slot="title">{this.app.title}</span>
        <span slot="subtitle">{this.app.snippet}</span>
        <calcite-chip slot="footer-start" value={this.app.type} appearance="outline-fill" kind="neutral" icon="add-in">
        {this.app.type}
        </calcite-chip>
        <calcite-button slot="footer-end" href='#' appearance='outline'>
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
        scale="s"
        
        onClick={() => this.openModal()}
      >
        New App
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
    const builder = this.builders.filter((builder) => {
      return builder.key === type;
    })
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
