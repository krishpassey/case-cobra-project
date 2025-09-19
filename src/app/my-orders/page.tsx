import Link from 'next/link'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Card, CardContent } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'

const MyOrders = () => {
  return (
    <MaxWidthWrapper className='py-20'>
      <div className='flex flex-col gap-8'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight'>My Orders</h1>
          <p className='text-gray-600 mt-2'>
            You haven't placed any orders yet. Create your first custom case!
          </p>
        </div>

        <Card>
          <CardContent className='py-20 text-center'>
            <h3 className='font-semibold text-xl mb-2'>No orders yet</h3>
            <p className='text-gray-600 mb-6'>
              You haven't placed any orders yet. Create your first custom case!
            </p>
            <Link
              href='/configure/upload'
              className={buttonVariants({
                size: 'lg',
              })}>
              Create your first case
            </Link>
          </CardContent>
        </Card>
      </div>
    </MaxWidthWrapper>
  )
}

export default MyOrders