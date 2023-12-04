'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

export const SignIn = () => {
	return (
		<MaxWidthWrapper>
			<div className='container relative flex pt-20 flex-col items-center justify-center lg:px-0'>
				<div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
					<div className='flex flex-col items-center space-y-2 text-center'>
						<Icons.logo className='h-20 w-20' />
						<h1 className='text-2xl font-bold'>Platformaga kirish</h1>
					</div>

					<div className='grid gap-6'>
						<form onSubmit={() => {}}>
							<div className='grid gap-2'>
								<div className='grid gap-1 py-2'>
									<Label className='mb-1' htmlFor='login'>
										Login
									</Label>
									<Input
										className={cn({
											'focus-visible:ring-red-500': true,
										})}
										placeholder='Login'
									/>
								</div>
								<div className='grid gap-1 py-2'>
									<Label className='mb-1' htmlFor='password'>
										Password
									</Label>
									<Input
										className={cn({
											'focus-visible:ring-red-500': true,
										})}
										placeholder='Password'
									/>
								</div>
								<Button>Kirish</Button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</MaxWidthWrapper>
	)
}
