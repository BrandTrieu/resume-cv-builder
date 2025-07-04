//import { useState } from 'react'


function HeaderForm() {
  return (
    <form>
      <label for="name">Name</label>
      <input type="name" id="name" name="name" required />
    
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label for="phone">Phone</label>
      <input type="number" id="phone" name="phone" required />
      
    
    </form>
  )
}

export default HeaderForm
