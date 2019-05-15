
const template = `  <div class="col-xl-4 mb-5 mb-xl-0">
    <div class="card shadow">
      <div class="card-header border-0">
        <div class="row align-items-center">
          <div class="col">
            <h3 class="mb-0">KEDATANGAN</h3>
          </div>
          <div class="col text-right">
            <a href="#!" class="btn btn-sm btn-primary">See all</a>
          </div>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table align-items-center table-flush">
          <thead class="thead-light">
            <tr>
              <th scope="col">Embarkasi</th>
              <th scope="col">Kloter</th>
              <th scope="col">Jemaah</th>
              <th scope="col">Petugas</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="index">
              <th>{{item.embarkasi}}</th>
              <th>{{item.kloter}}</th>
              <th>{{item.jumlah_jamaah}}</th>
              <th>{{item.jumlah_petugas}}</th>
              <th>{{item.jumlah_total}}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
`;
const baseUrl = 'https://5cdb9908069eb300142022b2.mockapi.io/ws/'

export default {
  template: template,
  data() {
    return {
      data: []
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