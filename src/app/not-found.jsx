import Link from "next/link"


function NotFound() {

  return (
    <section className='flex h-[calc(100vh-7rem)] justify-center items-center'>
      <div className="text-center">
        <h1 className='text-3xl'>Página no encontrada</h1>
        <Link href='/' className="mt-5 block text-green-dark underline" > Volver al inicio </Link>
      </div>
    </section>
  )
}

export default NotFound