export const channelDetailComponent = {
    bindings: {
        channel: '<'
      },
      template: `
        <div>
          <p>channel Details :</p><br>  
          <p>{{ $ctrl.channel.items[0].snippet.title }}</p><br>
          <p>{{ $ctrl.channel.items[0].snippet.description }}</p><br>
        </div>
      `
}


  