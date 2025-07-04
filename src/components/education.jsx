//import { useState } from 'react'


function EducationForm() {
  return (
    <form>
      <label for="school">School</label>
      <input type="text" id="school" name="school" required />
    
      <label for="schoolDesc">Description</label>
      <input type="text" id="schoolDesc" name="schoolDesc" required />
    </form>
  )
}

export default EducationForm