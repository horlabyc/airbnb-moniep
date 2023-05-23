'use client'
import useFilterModal from '../hooks/useFilterModal'
import { useCallback, useEffect, useState } from 'react'
import Input from '../components/input/input'
import {
  FieldValues, useForm
} from 'react-hook-form' 
import Button from '../components/button'

const FilterModal = () => {
  const filterModal = useFilterModal()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      minPrice: "10",
      maxPrice: "300+",
      bedrooms: "1",
      bathrooms: "any",
      beds: "2"
    }
  })
  const [showModal, setShowModal] = useState<boolean>(false);
  useEffect(() => {
    setShowModal(!!filterModal.isOpen)
  }, [filterModal])

  const handleClose = useCallback(() => {
    setShowModal(false)
    setTimeout(() => {
      filterModal.onClose()
    }, 300);
  }, [filterModal])
  if (!filterModal.isOpen) {
    return null
  }
  return (
    <>
      <div
        className="justify-end items-center overflow-x-hidden 
        overflow-y-hidden fixed z-50 inset-0 outline-none
        focus:outline-none"
      >
        <div className="absolute right-0 top-[125px] w-[20%] my-6 ml-auto h-full">
          <div className={
            `translate duration-300 w-full h-full 
            ${showModal ? 'translate-x-0' : 'translate-x-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
          `}>
            <div className="translate h-full border-0 shadow-lg relative flex flex-col gap-4 w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center mx-6 py-6 rounded-t justify-between relative border-b-[1px]">
                <span className="text-md font-medium">Filters</span>
                <span className="text-md text-red-400 cursor-pointer" onClick={handleClose}>Clear All</span>
              </div>
              <div className="flex flex-col mx-6 border-b-[1px]">
                <p className="text-md font-medium text-sm">Price range</p>
                <p className="text-xs text-gray-400 font-thin">The average nightly price is $133.33</p>
                <div className="flex gap-4 mt-4 mb-6">
                <Input
                  id='minPrice'
                  label='Min Price'
                  type='text'
                  price={true}
                  disabled={false}
                  register={register}
                  errors={errors}
                  required
                />
                <Input
                  id='maxPrice'
                  label='Max Price'
                  type='text'
                  price={true}
                  disabled={false}
                  register={register}
                  errors={errors}
                  required
                />
                </div>
              </div>
              <div className="flex flex-col mx-6 border-b-[1px] gap-4">
                <p className="text-md font-medium text-sm">Type of place</p>
                <div className="flex gap-4 items-start">
                  <div className="flex items-">
                    <input id="default-checkbox" type="checkbox" value="" className="accent-red-500 w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600" />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                  </div>
                  <div className="flex flex-col">
                    <p className='text-xs text-gray-700'>Entire Place</p>
                    <p className='text-xs text-gray-500'>A place all to yourself</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex items-">
                    <input id="default-checkbox" type="checkbox" value="" className="accent-red-500 w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600"/>
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                  </div>
                  <div className="flex flex-col">
                    <p className='text-xs text-gray-700'>Private room</p>
                    <p className='text-xs text-gray-500'>Your own room in a home or a hotel, plus some shared common places</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex items-">
                    <input id="default-checkbox" type="checkbox" value="" className="accent-red-500 w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600"/>
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                  </div>
                  <div className="flex flex-col mb-6">
                    <p className='text-xs text-gray-700'>Shared room</p>
                    <p className='text-xs text-gray-500'>A sleeping place and common areas that may be shared with others</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col px-6 border-b-[1px] gap-4">
                <p className="text-md font-medium text-sm">Rooms, beds, and baths</p>
                <div className="flex flex-col gap-4 mb-6">
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-medium text-gray-700">Bedrooms</p>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input type="radio" className="hidden" id="bedroom_any" value="any"  {...register('bedrooms', { required: true })}/>
                        <span className="radio-pill border px-3 text-xs  py-1 cursor-pointer rounded-xl">Any</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" className="hidden" id="bedroom_1" value="1" {...register('bedrooms', { required: true })}/>
                        <span className="radio-pill border px-3 py-1 text-xs cursor-pointer rounded-2xl">1</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" {...register('bedrooms', { required: true })} className="hidden" id="bedroom_2" value="2"/>
                        <span className="radio-pill border px-3 py-1 text-xs cursor-pointer rounded-2xl">2</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" {...register('bedrooms', { required: true })} className="hidden" id="bedroom_3" value="3"/>
                        <span className="radio-pill border px-3 py-1 text-xs cursor-pointer rounded-2xl">3</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" {...register('bedrooms', { required: true })} className="hidden" id="bedroom_4" value="4"/>
                        <span className="radio-pill border px-3 py-1 text-xs cursor-pointer rounded-2xl">4</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" {...register('bedrooms', { required: true })} className="hidden" id="bedroom_5" value="5"/>
                        <span className="radio-pill border px-3 py-1 text-xs cursor-pointer rounded-2xl">5+</span>
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-medium text-gray-700">Beds</p>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input type="radio" {...register('beds', { required: true })} className="hidden" id="beds_any" value="any"/>
                        <span className="radio-pill border px-3 text-xs  py-1 cursor-pointer rounded-xl">Any</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" {...register('beds', { required: true })} className="hidden" id="beds_1" value="1"/>
                        <span className="radio-pill border px-3 py-1 text-xs cursor-pointer rounded-2xl">1</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" {...register('beds', { required: true })} className="hidden" id="beds_2" value="2"/>
                        <span className="radio-pill border px-3 py-1 text-xs cursor-pointer rounded-2xl">2</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" {...register('beds', { required: true })} className="hidden" id="beds_3" value="3"/>
                        <span className="radio-pill border px-3 py-1 text-xs cursor-pointer rounded-2xl">3</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" {...register('beds', { required: true })} className="hidden" id="beds_4" value="4"/>
                        <span className="radio-pill border px-3 py-1 text-xs cursor-pointer rounded-2xl">4</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" {...register('beds', { required: true })} className="hidden" id="beds_5" value="5"/>
                        <span className="radio-pill border px-3 py-1 text-xs cursor-pointer rounded-2xl">5+</span>
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-medium text-gray-700">Bathrooms</p>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input type="radio" {...register('bathrooms', { required: true })} className="hidden" id="bathrooms_any" value="any"/>
                        <span className="radio-pill border px-3 py-1 text-xs cursor-pointer rounded-2xl">Any</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" {...register('bathrooms', { required: true })} className="hidden" id="bathrooms_1" value="1"/>
                        <span className="radio-pill border px-3 py-1 text-xs cursor-pointer rounded-2xl">1</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" {...register('bathrooms', { required: true })} className="hidden" id="bathrooms_2" value="2"/>
                        <span className="radio-pill border px-3 py-1 text-xs cursor-pointer rounded-2xl">2</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" {...register('bathrooms', { required: true })} className="hidden" id="bathrooms_3" value="3"/>
                        <span className="radio-pill border px-3 py-1 text-xs cursor-pointer rounded-2xl">3</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" {...register('bathrooms', { required: true })} className="hidden" id="bathrooms_4" value="4"/>
                        <span className="radio-pill border px-3 py-1 text-xs cursor-pointer rounded-2xl">4</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" {...register('bathrooms', { required: true })} className="hidden" id="bathrooms_5" value="5"/>
                        <span className="radio-pill border px-3 py-1 text-xs cursor-pointer rounded-2xl">5+</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-4">
                <Button
                  disabled={true}
                  label="Show 836 Homes"
                  onClick={() => { }}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FilterModal