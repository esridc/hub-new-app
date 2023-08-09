import { Component, Host, State, h } from '@stencil/core';
import { setAssetPath } from "@esri/calcite-components/dist/components";
import { searchItems, SearchQueryBuilder } from "@esri/arcgis-rest-portal";

setAssetPath("https://js.arcgis.com/calcite-components/1.4.3/assets");

@Component({
  tag: 'hub-new-app',
  styleUrl: 'hub-new-app.css',
  shadow: true,
})
export class HubNewApp {

  modal: HTMLCalciteModalElement;
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
          <div slot="content">
            {this.newAppTimestamp ? null : this.renderNewOptions()}
            {this.content ? this.renderContent() : null}

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
          .match("StoryMap").in("type")
          .and()
          .match("aturner").in("owner")

    let items = [];
    await searchItems(query).then((response) => {
      items = response.results;
    })
    
    if(items.length > 0) {
      this.content = items[0];
    }
  }

  @State() content: any = null;
  renderContent() {
    return (
      <calcite-card>
        <span slot="title">{this.content.title}</span>
        <span slot="subtitle">{this.content.snippet}</span>
        <calcite-chip slot="footer-start" value={this.content.type} appearance="outline-fill" kind="neutral" icon="add-in">
        {this.content.type}
        </calcite-chip>
        <calcite-button slot="footer-end" href={`https://storymaps.arcgis.com/stories/${this.content.id}`} target="_new">
            Open
        </calcite-button>
    </calcite-card>
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
    switch(type) {
      case "storymap":
        window.open("https://storymaps.arcgis.com/stories/new", "_blank");
        break;

      default:
        break;
    }
  }

  renderNewOptions() {
    return(
      <div slot="modal" class="new-options">
        <calcite-button
          appearance="solid"
          color="blue"
          onClick={() => this.newAppOpen("storymap")}
        >
          New StoryMap
        </calcite-button>
      </div>
    )
  }

}
