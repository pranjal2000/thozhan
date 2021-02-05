import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
          <ion-route url="/profile/:name" component="app-profile" />
          <ion-route url="/about" component="ngo-about" />
          <ion-route url="/contact" component="ngo-contact" />
          <ion-route url="/causes" component="ngo-causes" />
          <ion-route url="/team" component="ngo-team" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
