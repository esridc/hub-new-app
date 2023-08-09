import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hub-new-form',
  styleUrl: 'hub-new-form.css',
  shadow: true,
})
export class HubNewForm {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
