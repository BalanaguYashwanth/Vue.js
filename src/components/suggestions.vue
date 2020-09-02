<template>
  <div>
    <div class="container">
      <p class="display-2" id="title">Request the Service Agents</p>
      <form>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Name</label>
            <input
              type="text"
              v-model="first_name"
              placeholder="enter your  name"
              class="form-control"
              required
            />
          </div>

          <div class="form-group col-md-6">
            <label>phone number</label>
            <input
              type="text"
              v-model="last_name"
              placeholder="enter your phonenumber"
              class="form-control"
              required
            />
          </div>
        </div>



        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Start Piont</label>
            <input
              type="text"
              v-model="first_name"
              placeholder="enter your first name"
              class="form-control"
              required
            />
          </div>

          <div class="form-group col-md-6">
            <label>End Point</label>
            <input
              type="text"
              v-model="last_name"
              placeholder="enter your last name"
              class="form-control"
              required
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Shift</label>
            <select class="form-control" v-model="shift" required>
              <option disabled value>Choose the Shift</option>
              <option>Day shift</option>
              <option>Night shift</option>
            </select>
          </div>

          <div class="form-group col-md-6">
            <label>Expected Time/day</label>
            <input
              type="text"
              v-model="first_name"
              placeholder="enter time and day to book"
              class="form-control"
              required
            />
          </div>
        </div>

        <div class="form-group">
          <label>Select the category</label>
          <select class="form-control" v-model="category" required>
            <option disabled value>Choose the category</option>
            <option>Car service</option>
            <option>Bike service</option>
            <option>Courier service</option>
            <option>Store service</option>
            <option>Medical service</option>
            <option>Food service (Beta)</option>
            <option>Repair(Mechanic or Electric) service</option>
          </select>
        </div>
        <button v-on:click.prevent="register" class="btn btn-secondary">Submit</button>
      </form>
      {{incorrect}}
    </div>
  </div>
</template>


<script >
export default {};
</script>

<style scoped >
#title {
  margin-top: 150px;
  margin-bottom: 40px;
}
</style>