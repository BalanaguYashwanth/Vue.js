<template>
  <div>
    <form>
      <div class="container">
        <div class="form-row">
          <div class="form-groups col-md-6">
            <label>Name</label>
            <input type="text" placeholder="enter your name" class="form-control" />
          </div>

          <div class="form-group col-md-6">
            <label>Phone number</label>
            <input type="number" placeholder="enter your phone number" class="form-control" />
          </div>
        </div>
      
      <div class="form-row">
        <div class="form-group col-md-6">
          <label>Email</label>
          <input type="email" placeholder="enter your email" class="form-control" />
        </div>
        <div class="form-group col-md-6">
          <label>Gender</label>
          <select class="form-control">
            <option selected>Choose the gender</option>
            <option>Male</option>
            <option>Femle</option>
            <option>Prefer not to say</option>
          </select>
        </div>

        <div class="form-group col-md-4">
          <label>Aadhar number</label>
          <input type="text" placeholder="enter your Aadhar card number" class="form-control" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label>Address</label>
          <input type="text" placeholder="enter your adddress" class="form-control" />
        </div>

        <div class="form-group col-md-6">
          <label>City/Town/Village</label>
          <input type="text" placeholder="enter your hometown place" class="form-control" />
        </div>
      </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style >
</style>