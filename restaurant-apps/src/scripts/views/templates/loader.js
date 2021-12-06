const loader = {
    ShowLoader() {
        return `
          <span><i class="fa fa-spinner fa-spin fa-3x"></i></span>`;
    },

    ShowOfflineLoader() {
        return `
          <div class="content">
            <span>
            <i class="icon material-icons-outlined md-48 md-red">running_with_errors</i>
            </span>
              <h2>Hmm.. Kami tidak bisa menampilkan data yang anda inginkan, <br> Silahkan Coba lagi.!</h2>
          </div>`;
    },
};

export default loader;