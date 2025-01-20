import Image from 'next/image'
import Button from './components/Button'

export default function DashboardPage() {
  return (
    <div>
      <section className='flex flex-col items-center justify-center py-24'>
        <h1 className='text-center text-7xl font-extrabold leading-tight'>
          {'An'}{' '}
          <span className='bg-span-bg bg-clip-text text-transparent'>
            {'Booster'}
          </span>
          <br />
          {'to_Your_NextJS_Apps'}
        </h1>
        <div className='my-6 px-20 text-center text-2xl text-text-secondary'>
          {
            'An_approachable_performant_and_versatile_boilerplate_for_building_SSR_applications'
          }
        </div>
        <Image
          src="https://i0.hdslb.com/bfs/face/d8e85f206059c8d660694dc1d8d26e2d15554c3d.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <div className='mt-4 flex flex-row gap-4'>
          <a
            href='https://github.com/new?template_name=nextjs-template&template_owner=yahyaparvar'
            target='_blank'
          >
            <Button rounded size='large'>
              {'hello world'}
            </Button>
          </a>
          <a
            href='https://github.com/yahyaparvar/nextjs-template'
            target='_blank'
          >
            <Button rounded size='large' variant='secondary'>
              {'Learn_More'}
            </Button>
          </a>
        </div>
      </section>
      <section className='bg-background-secondary py-20 max-lg:py-10'>
        <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
          <div className='text-center'>
            <h2 className='mb-3  text-xl font-semibold'>{'Approachable'}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {
                'Add_components_without_sending_additional_client_side_JavaScript_Built_on_the_latest_React_features'
              }
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{'Versatile'}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {
                'Automatic_Image_Font_and_Script_Optimizations_for_improved_UX_and_Core_Web_Vitals'
              }
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{'Performant'}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {
                'A_rich_incredibly_adoptable_template_that_scales_between_a_small_showcase_website_and_a_full_size_app'
              }
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
