import { Button, buttonVariants } from '@/components/ui/button'
import CountUp from 'react-countup'
import { HiLocationMarker } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import MaxWidthWrapper from '../../components/MaxWidthWrapper'
import { Apartments } from '../components/Apartments'
import './index.css'

export const IjaraPage = () => {
	return (
		<MaxWidthWrapper>
			{/* <Navbar /> */}

			<div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
				<div className='orange-circle bg-[#8ADAB2]' />
				<h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
					Barcha tumanlardan ijaraga uylar{' '}
					<span className='text-blue-600'>hattoki talabalar uchun ham</span>.
				</h1>

				<p className='mt-6 text-lg max-w-prose text-muted-foreground'>
					Websaxifamizga hush kelibsiz!
				</p>
				<div className='flex flex-col sm:flex-row gap-4 mt-6'>
					<Link to='products' className={buttonVariants()}>
						Uylarni ko'rish
						<img
							className='text-white h-[30px]'
							src='/empty-dark.png'
							alt='home'
						/>
					</Link>
				</div>

				<div className='search-bar border-r-5 mt-4 mb-5'>
					<HiLocationMarker className='text-primary' size={30} />
					<input className='border-none outline-none' type='text' />
					<Button>Qidirish</Button>
				</div>
				<div className='flex stats items-center justify-between w-[350px] ml-10'>
					<div className='flex flex-col stat items-start'>
						<span>
							<CountUp start={1950} end={2000} duration={4} />
							<span>+</span>
						</span>
						<span className='text-muted-foreground'>Mavjud uylar</span>
					</div>
					<div className='flex flex-col stat items-start'>
						<span>
							<CountUp start={75} end={90} duration={4} />
							<span>+</span>
						</span>
						<span className='text-muted-foreground'>Mamnun mijozlar</span>
					</div>
				</div>
			</div>
			{/* TODO: List products */}
			<Apartments />
		</MaxWidthWrapper>
	)
}
