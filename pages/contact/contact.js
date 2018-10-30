Page({
  data: {
    latitude: 22.53223705972429,
    longitude: 114.05046194702152,
    markers: [{
      id: 1,
      latitude: 22.53223705972429,
      longitude: 114.05046194702152,
      name: '深圳市民中心'
    }],
    covers: []
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 22.53223705972429,
        longitude: 114.05046194702152,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 22.53223705972429,
        longitude: 114.05046194702152,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
  }
})
