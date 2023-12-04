import 'swiper/css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { sliderSettings } from '../../lib/common'
import data from '../../lib/slider.json'
import './Apartment.css'

const SliderButtons = () => {
	const swiper = useSwiper()
	return (
		<div className='absolute  flex justify-start items-center r-button'>
			<button onClick={() => swiper.slidePrev()}>&lt;</button>
			<button onClick={() => swiper.slideNext()}>&gt;</button>
		</div>
	)
}

export const Apartments = () => {
	return (
		<section>
			<div className='truncate relative pr-1'>
				<div className='mb-2'>
					<span className='text-[#8ADAB2] font-bold text-4xl'>Uylar</span>
				</div>
				<Swiper {...sliderSettings}>
					<SliderButtons />
					{data.map((card, i) => (
						<SwiperSlide key={i}>
							<div className='r-card flex items-start flex-col justify-center gap-2.5 p-5 rounded-lg max-w-max m-auto list-disc [&>*:nth-child(2)]:text-xl font-semibold'>
								<img className='w-full max-w-xs' src={card.image} alt='home' />
								<span>
									<span style={{ color: '#8ADAB2' }}>$</span>
									<span className='text-muted-foreground'>{card.price}</span>
								</span>
								<span className='text-[#1f3e72] overflow-hidden whitespace-normal'>
									{card.name}
								</span>
								<span className='text-muted-foreground text-sm overflow-hidden nor whitespace-normal'>
									{card.detail}
								</span>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}
