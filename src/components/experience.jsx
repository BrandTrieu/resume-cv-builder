//import { useState } from 'react'


function ExperienceForm() {
  return (
    <form>
      <label for="jobTitle">Job Title</label>
      <input type="text" id="jobTitle" name="jobTitle" required />
    
      <label for="jobDesc">Description</label>
      <input type="text" id="jobDesc" name="jobDesc" required />
    </form>
  )
}

export default ExperienceForm