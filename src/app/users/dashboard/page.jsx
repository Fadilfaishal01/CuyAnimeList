const { authUserSession } = require("@/libs/auth-libs")
const { default: Image } = require("next/image")

const Page = async () => {
   const user = await authUserSession()
   return (
      <div>
         <h4>Selamat Datang, {user.name}</h4>
         <Image src={user.image} alt={`Image Profile ${user.name}`} width={250} height={250} />
      </div>
   )
}

export default Page