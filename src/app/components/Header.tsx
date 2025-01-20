'use client'
import GithubIcon from '../icons/github'
import LogoIcon from '../icons/logo'
export const Header = () => {
  return (
    <div className='mx-auto flex max-w-full h-16 flex-row items-center justify-between p-5 sticky top-0 backdrop-blur-lg bg-gray-300 bg-opacity-20'>
        <div className='flex flex-row items-center'>
          <div className='mb-2 h-14 w-14'>
            <LogoIcon />
          </div>
          <strong className='mx-2 select-none'>qiansuiliyi</strong>
        </div>
      <div className='flex flex-row items-center gap-3'>
        <nav className='mr-10 inline-flex gap-5'>
            {'About'}
          <a href=''>{'Support'}</a>
          <a href=''>{'Other'}</a>
        </nav>
        <a
          href='https://github.com/yahyaparvar/nextjs-template'
          target='_blank'
        >
          <div className='size-8'>
            <GithubIcon />
          </div>
        </a>
      </div>
    </div>
  )
}
