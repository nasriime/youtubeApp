class headerController {
  constructor ($state) {
    this._state = $state
  }

  $onInit(){
    this.disableSearch = false
  }

  submitForm(){
    this._state.go('videos', { 
      query: this.searchInput 
    })
  }

}


export default headerController