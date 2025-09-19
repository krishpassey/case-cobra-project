import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

export default function NotFound() {
  return (
    <MaxWidthWrapper className='flex flex-col items-center justify-center min-h-[60vh] text-center'>
      <div className='mx-auto max-w-md'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
          404
        </h1>
        <p className='mt-6 text-base leading-7 text-gray-600'>
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Link
            href='/'
            className={buttonVariants({
              size: 'lg',
            })}>
            Go back home
          </Link>
          <Link
            href='/configure/upload'
            className={buttonVariants({
              variant: 'outline',
              size: 'lg',
            })}>
            Create case
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}