import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

export const WelcomePage = () => {
	const navigate = useNavigate()

	const handleIjaragaUylarClick = () => {
		navigate('/ijara')
	}
	return (
		<MaxWidthWrapper>
			<div className='py-20 mx-auto flex flex-col md:flex-col sm:flex-col 2xl:flex-row justify-center  min-h-screen'>
				<div
					className='flex flex-row justify-center md:justify-between'
					style={{
						alignItems: 'center',
					}}
				>
					<div className='md:ml-20 w-[200px] md:w-[300px] sm:w-[300px] 2xl:w-[400px]'>
						<img
							className='obtain-contain'
							src='/home.svg'
							alt='image description'
						/>
					</div>
					<div className='md:mr-20 w-[300px] md:w-[500px] sm:w-[300px] hidden md:block'>
						<img
							className='object-contain'
							src='/infotab.svg'
							alt='image description'
						/>
					</div>
				</div>
				<div className='flex 2xl:flex-col md:flex-row justify-center flex-col sticky'>
					<Button
						onClick={handleIjaragaUylarClick}
						className='w-full  h-40 text-[40px] sm:text-[40px] text-white hover:text-slate-300 mb-2 mr-2 '
						style={{
							borderRadius: '50px',
							transition: 'color 0.3s ease-in-out',
						}}
					>
						Ijaraga uylar
					</Button>
					<Button
						className='w-full h-40 text-[40px] sm:text-[40px] md:text-[40px] text-white hover:text-slate-300'
						style={{
							borderRadius: '50px',
							transition: 'color 0.3s ease-in-out',
						}}
					>
						Sotuvdagi uylar
					</Button>
				</div>
			</div>
		</MaxWidthWrapper>
	)
}
