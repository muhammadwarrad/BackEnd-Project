// Imported Jwt 
import jwt from 'jsonwebtoken'
// Token Key Variable 
const TOKEN_KEY = process.env.TOKEN_KEY || 'uikt7kiu6uthuhg6h'
// Authorization Function 
const restrict = (req, res, next) => {
  try {
    // Obtain Token key 
    const token = req.headers.authorization.split(' ')[1]
    // Compare Token keys 
    if (jwt.verify(token, TOKEN_KEY)) {
      next()
    }
  } catch (error) {
    console.log(error)
    res.status(403).send('Unauthorized')
  }
}
// Export
export default restrict