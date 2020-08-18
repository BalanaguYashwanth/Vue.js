export default{
    computed: {
        filterdata: function () {
          return this.data.filter((blog) => {
            return blog.title.match(this.search);
          });
        },
      },
}