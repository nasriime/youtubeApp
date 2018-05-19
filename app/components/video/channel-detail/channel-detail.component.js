export const channelDetailComponent = {
    bindings: {
        channel: '<'
      },
      template: `
        <div>
          {{ $ctrl.channel.items[0].id }}    
        </div>
      `
}


  