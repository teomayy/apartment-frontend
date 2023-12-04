import { Cart } from '@/components/Cart'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export const Navbar = () => {
	const user = null

	return (
		<div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
			<header className='relative bg-white'>
				<MaxWidthWrapper>
					<div className='border-b border-gray-200'>
						<div className='flex h-16 items-center'>
							{/*TODO: Mobile nav */}

							<div className='ml-4 flex lg-ml-0'>
								<Link to='/'>
									<Icons.logo className='h-10 w-10' />
								</Link>
							</div>
							<div className='ml-auto flex items-center'>
								<div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
									{user ? null : (
										<Link
											to='/sign-in'
											className={buttonVariants({ variant: 'ghost' })}
										>
											Kirish
										</Link>
									)}
									<div className='ml-4 flow-root lg:ml-6'>
										<Cart />
									</div>
								</div>
							</div>
						</div>
					</div>
				</MaxWidthWrapper>
			</header>
		</div>
	)
}
