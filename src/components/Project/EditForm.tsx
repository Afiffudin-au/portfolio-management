import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'
import { toast } from 'react-toastify'
import { putProject } from '../../api-calls/project'
import handleToast from '../../handleToast'
import Rte from '../RTE'
interface Inputs {
  projectName: string
  description: string
  imgUrl: string
  githubLink: string
  tech: []
  previewLink: string
  emptyString?: string
}
interface EditFormProps {
  handleRefresh?: () => void
  setIsOpenModal: any
  projectName: string
  description: string
  imgUrl: string
  githubLink: string
  tech: []
  previewLink: string
  id: string
}
function EditForm({
  id,
  projectName,
  description,
  imgUrl,
  githubLink,
  tech,
  previewLink,
  handleRefresh,
  setIsOpenModal,
}: EditFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isDirty },
  } = useForm<Inputs>({
    defaultValues: {
      projectName,
      description,
      imgUrl,
      githubLink,
      previewLink,
      tech,
    },
  })
  const [techTags, setTechTags] = useState<any>(tech)
  const [techTagDirty, setTechTagDirty] = useState(false)
  const [text, setText] = useState(description)
  const handleSendForm: SubmitHandler<Inputs> = async (data) => {
    if (isDirty || techTagDirty || description !== text) {
      const dataFix = { ...data }
      delete dataFix.emptyString
      const idToast = toast.loading('Updating...')
      const res = await putProject(dataFix, id)
      if (!res.error) {
        handleToast(idToast, res)
        setIsOpenModal(false)
        handleRefresh?.()
      } else {
        handleToast(idToast, res)
      }
    } else {
      toast.warn('No changes!')
    }
  }
  const handleKeyDown = (e: any) => {
    if (e.code === 'Enter') e.preventDefault()
    if (e.key === 'Enter') {
      if (!e.target.value.trim()) return
      const isDuplicate = () => {
        for (let i = 0; i < techTags.length; i++) {
          if (e.target.value === techTags[i]) {
            return true
          }
        }
      }
      if (isDuplicate()!) return
      setTechTags([...techTags, e.target.value])
      const value: any = [...techTags, e.target.value]
      setValue('tech', value)
      e.target.value = ''
    }
  }
  const removeTag = (index: number) => {
    setTechTags(techTags.filter((el: any, i: number) => i !== index))
    const value = techTags.filter((el: any, i: number) => i !== index)
    setValue('tech', value)
  }
  const handleTrigger = (e: any) => {
    e.preventDefault()
    setValue('description', text)
    handleSubmit(handleSendForm)()
  }
  useEffect(() => {
    if (JSON.stringify(tech) === JSON.stringify(techTags)) {
      setTechTagDirty(false)
    } else {
      setTechTagDirty(true)
    }
  }, [tech, techTags])

  return (
    <div className='my-5 w-full p-2 rounded-lg'>
      <form>
        <div className='mb-6'>
          <label className='block mb-2 text-sm font-medium text-gray-900'>
            Edit a Project Name
          </label>
          <input
            type='text'
            className='border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
            placeholder='name...'
            {...register('projectName', {
              required: true,
              validate: (value) => {
                return !!value.trim()
              },
            })}
          />
        </div>
        <div className='mb-6'>
          <label className='block mb-2 text-sm font-medium text-gray-900'>
            Edit a Desc
          </label>
          <Rte setText={setText} text={text} />
        </div>
        <div className='mb-6'>
          <label className='block mb-2 text-sm font-medium text-gray-900'>
            Edit a github link
          </label>
          <input
            type='text'
            className='border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
            placeholder='https://github.com/username/repo...'
            {...register('githubLink', {
              required: true,
              validate: (value) => {
                return !!value.trim()
              },
            })}
          />
        </div>
        <div className='mb-6'>
          <label className='block mb-2 text-sm font-medium text-gray-900'>
            Edit a img url
          </label>
          <input
            type='text'
            className='border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
            placeholder='https://res.cloudinary.com/...'
            {...register('imgUrl', {
              required: true,
              validate: (value) => {
                return !!value.trim()
              },
            })}
          />
        </div>
        <div className='mb-6'>
          <label className='block mb-2 text-sm font-medium text-gray-900'>
            Edit a preview link
          </label>
          <input
            type='text'
            className='border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
            placeholder='https://res.cloudinary.com/...'
            {...register('previewLink', {
              required: true,
              validate: (value) => {
                return !!value.trim()
              },
            })}
          />
        </div>
        <div className='mb-6'>
          <div className='flex items-center gap-1 mb-2 flex-wrap'>
            {techTags.map((item: any, index: any) => (
              <span
                key={item + index}
                className='cursor-pointer inline-flex items-center gap-2 py-1 px-3 bg-blue-500 text-white font-semibold text-sm rounded-full'>
                {item}
                <AiOutlineClose onClick={() => removeTag(index)} />
              </span>
            ))}
          </div>
          <label className='block mb-2 text-sm font-medium text-gray-900'>
            Edit a tech tags
          </label>
          <input
            type='text'
            className='border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
            placeholder='[react.js] [next.js]'
            onKeyDown={handleKeyDown}
            {...register('emptyString', {})}
          />
        </div>
        <div className='mb-6'>
          <button
            onClick={handleTrigger}
            type='submit'
            className='text-white disabled:bg-slate-400 disabled:text-gray-300 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditForm
