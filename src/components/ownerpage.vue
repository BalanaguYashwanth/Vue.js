<template>
  <div>
    <p class="display-3 text-center" id="title">Owner Service page</p>
    <form>
      <div class="container">
        <div class="text-center m-3">
          <img src="https://info-ted.eu/wp-content/uploads/2019/12/profile-photo.png" class="rounded" alt="profile pic" />
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Start point</label>
            <input
              type="text"
              placeholder="enter your startpoint place Ex:cmbt"
              class="form-control"
            />
          </div>

          <div class="form-group col-md-6">
            <label>End point</label>
            <input
              type="text"
              placeholder="enter your endpoint place Ex:vadapalani "
              class="form-control"
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-4">
            <label>Present License number</label>
            <input type="number" placeholder="enter your License number car/bike" class="form-control" />
          </div>

          <div class="form-group col-md-4">
            <label>Present Registration number</label>
            <input type="number" placeholder="enter your registration number car/bike" class="form-control" />
          </div>

          <div class="form-group col-md-4">
            <label>Service Days</label>
            <input type="text" placeholder="No. of days available for service" class="form-control" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-4">
            <label>Age</label>
            <input
              type="text"
              placeholder="Enter your age prior eligiblity:18+"
              class="form-control"
            />
          </div>

          <div class="form-group col-md-4">
            <label>Shift</label>
            <select class="form-control">
              <option selected>Choose the Shift</option>
              <option>Day shift</option>
              <option>Night shift</option>
            </select>
          </div>

          <div class="form-group col-md-4">
            <label>Charge per each trip</label>
            <input type="text" placeholder="Enter charge fees in rupees" class="form-control" />
          </div>
        </div>

        <div class="form-row">

        <div class="form-group col-md-6">
          <label>Select the category</label>
          <select class="form-control">
            <option selected>Choose the category</option>
            <option>Car service</option>
            <option>Bike service</option>
            <option>Courier service</option>
            <option>Store service</option>
            <option>Medical service</option>
            <option>Food service (Beta)</option>
            <option>Repair(Mechanic or Electric) service</option>
          </select>
        </div>

         <div class="form-group  col-md-6 ">
          <label>Present  Aadhar card number</label>
          <input type="number" class="form-control"/>
        </div>



         </div>

        <div class="form-group">
          <label>Upload your Image</label>
          <input type="file" class="form-control-file" id="exampleFormControlFile1" />
        </div>

        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">Terms and conditions</label>
          </div>
        </div>

        <button id="submit" class="btn btn-secondary btn-lg btn-block">submit</button>
      </div>

      <div>
          <h1></h1>


      </div>
    </form>
  </div>
</template>


<script>
export default {};
</script>

<style >
#title {
  color: #2c3e50;
}

#submit{
    margin-bottom: 30px;
}
</style>