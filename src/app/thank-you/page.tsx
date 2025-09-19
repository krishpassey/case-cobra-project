import { Check } from 'lucide-react'

export default function ThankYou() {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
        <div className='max-w-xl'>
          <p className='text-base font-medium text-primary'>Thank you!</p>
          <h1 className='mt-2 text-4xl font-bold tracking-tight sm:text-5xl'>
            Your case is on the way!
          </h1>
          <p className='mt-2 text-base text-zinc-500'>
            We've received your order and are now processing it.
          </p>

          <div className='mt-12 text-sm font-medium'>
            <p className='text-zinc-900'>Order details</p>
            <div className='mt-2 border rounded-lg bg-gray-50 p-6'>
              <div className='flex items-center'>
                <Check className='h-5 w-5 text-green-500 mr-2' />
                <span>Payment confirmed</span>
              </div>
              <div className='flex items-center mt-2'>
                <Check className='h-5 w-5 text-green-500 mr-2' />
                <span>Order placed successfully</span>
              </div>
              <div className='flex items-center mt-2'>
                <Check className='h-5 w-5 text-green-500 mr-2' />
                <span>Processing your custom case</span>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-16'>
          <div className='text-sm font-medium text-gray-900'>
            We appreciate your business! Here's what happens next:
          </div>
          <div className='mt-2 text-sm text-gray-600'>
            <p>1. We'll start printing your custom case within 24 hours</p>
            <p>2. You'll receive a tracking number via email</p>
            <p>3. Your case will arrive in 3-5 business days</p>
          </div>
        </div>

        <div className='mt-16 border-t border-gray-200 pt-8'>
          <h4 className='font-semibold text-zinc-900'>
            You made a great choice!
          </h4>
          <p className='mt-2 text-sm text-zinc-600'>
            We at CaseCobra believe that a phone case doesn't only need to
            look good, but also last you for the years to come. We offer a
            5-year print guarantee: If your case isn't of the highest quality,
            we'll replace it for free.
          </p>
        </div>

        <div className='mt-16 border-t border-gray-200 pt-8 text-xs text-gray-500'>
          <p>
            If you have any questions about your order, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  )
}