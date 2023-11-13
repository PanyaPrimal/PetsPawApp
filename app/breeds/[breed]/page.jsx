'use client'

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ImageService } from "@service/image.service";
import PageContainer from '@app/components/PageContainer/PageContainer';
import Image from "next/image";
import Loader from "@app/components/ui/Loader/Loader";
import UserLogItem from "@app/components/UserLog/UserLogItem";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from "react-responsive-carousel";


const Breed = ({ breed }) => {
  const { data, isLoading, isFetching } = useQuery({
		queryKey: ["breed", breed],
		queryFn: () =>
			ImageService.getImages(
				{
					limit: 5,
					has_breeds: 1,
					breed_ids: breed,
				},
				"data"
			),
	});

  return (
    <PageContainer>
      {isLoading || isFetching ? (
				<Loader centered position = 'centredInGrids'/>
			) : data?.length ? (
				<>
          <Carousel
						swipeable
						emulateTouch
						showStatus={false}
						showArrows={false}
						showThumbs={false}
					>
						{data?.map((item) => (
							<div
								className="overflow-hidden 3sm:h-[160px] sm:h-[360px] lg:h-[360px] max-w-full rounded-[20px]"
								key={item.id}
							>
								<Image
									src={item.url}
									placeholder="blur"
									blurDataURL={item.url}
									layout="fill"
									alt={item.breeds[0].name}
								/>
							</div>
						))}
          </Carousel>

					<div className="mt-[56px] pt-[20px] px-[40px] pb-[40px] relative border-2
            border-primary-soft rounded-[20px] dark:border-primary-dark">
						<div className="absolute top-[-15px] right-2/4 translate-x-2/4 inline-block px-[20px]
              rounded-[20px] bg-white text-[20px] font-medium whitespace-nowrap dark:bg-black-soft">
							{data[0].breeds[0].name}
						</div>
						<div className="text-center text-[20px] text-gray-dark">
							{data[0].breeds[0].description}
						</div>
						<div className="w-full flex justify-between gap-[20px] mt-[20px] 3sm:flex-wrap 3sm:gap-[10px]">
							<div className="w-full">
								<span className="font-medium">
									Temperament:
								</span>{" "}
								<span className="text-gray-dark">
									{data[0].breeds[0].temperament}
								</span>
							</div>
							<div className="w-full flex flex-col gap-[10px]">
								<div>
									<span className="font-medium">Origin:</span>{" "}
									<span className="text-gray-dark">
										{data[0].breeds[0].origin}
									</span>
								</div>
								<div>
									<span className="font-medium">Weight:</span>{" "}
									<span className="text-gray-dark">
										{data[0].breeds[0].weight.metric} kgs
									</span>
								</div>
								<div>
									<span className="font-medium">
										Life span:
									</span>{" "}
									<span className="text-gray-dark">
										{data[0].breeds[0].life_span} years
									</span>
								</div>
							</div>
						</div>
					</div>
				</>
			) : (
				<UserLogItem text="No item found" />
			)}
    </PageContainer>
  )
};

Breed.getInitialProps = async ({ query }) => {
	const { breed } = query;

	return { breed };
};


export default Breed;