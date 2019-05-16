const component = `
  <div class="header bg-gradient-primary pb-8 pt-5 pt-md-7">
    <div class="container-fluid">
      <div class="header-body">
        <div class="row">

          <div class="col-xl-3 col-lg-6">
            <div class="card card-stats mb-4 mb-xl-0">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <h5 class="card-title text-uppercase text-muted mb-0">Kloter Tiba/Berangkat</h5>
                    <span class="h2 font-weight-bold mb-0">{{kloter}}</span>
                  </div>
                  <div class="col-auto">
                    <div class="icon icon-shape bg-danger text-white rounded-circle shadow">
                      <i class="fas fa-plane"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-6">
            <div class="card card-stats mb-4 mb-xl-0">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <h5 class="card-title text-uppercase text-muted mb-0">Jemaah Tiba</h5>
                    <span class="h2 font-weight-bold mb-0">{{jemaah_tiba}}</span>
                  </div>
                  <div class="col-auto">
                    <div class="icon icon-shape bg-warning text-white rounded-circle shadow">
                      <i class="fas fa-male"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-xl-3 col-lg-6">
            <div class="card card-stats mb-4 mb-xl-0">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <h5 class="card-title text-uppercase text-muted mb-0">Wafat</h5>
                    <span class="h2 font-weight-bold mb-0">{{wafat}}</span>
                  </div>
                  <div class="col-auto">
                    <div class="icon icon-shape bg-yellow text-white rounded-circle shadow">
                      <i class="fas fa-bed"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-6">
            <div class="card card-stats mb-4 mb-xl-0">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <h5 class="card-title text-uppercase text-muted mb-0">Rawat</h5>
                    <span class="h2 font-weight-bold mb-0">{{rawat}}</span>
                  </div>
                  <div class="col-auto">
                    <div class="icon icon-shape bg-info text-white rounded-circle shadow">
                      <i class="fa fa-hospital"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
`;

const baseUrl = 'https://5cdb9908069eb300142022b2.mockapi.io/ws/'

export default {
  template: component,
  data() {
    return {
      jemaah_tiba: 0,
      rawat: 0,
      wafat: 0,
      kloter: 0,
    }
  },
  methods: {
    getData: function () {
      axios.get(`${baseUrl}embarkasi`)
      .then((response)  =>  {
        console.log(response.data.data)
        this.data = response.data.data;
      }, (error)  =>  {
        console.log(error);
      })
    },
  },
  mounted() {
    this.getData();
  },
}
