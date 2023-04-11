import { useState } from 'react'
import { handleGenerateId } from '../../../utils'
import { Button, DatePicker, Input } from 'antd'
import CopyToClipboard from 'react-copy-to-clipboard'
import { FiCopy } from 'react-icons/fi'

const GenerateOne = () => {
  const [name, setName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [id, setId] = useState('')
  const [isCopied, setCopied] = useState(false)

  const handleCreate = () => {
    setId(handleGenerateId(name, birthday))
  }

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div>
      <h2 className='text-2xl'>1. Generate One ID</h2>

      <h4>Name</h4>
      <Input
        className='w-96'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />

      <h4>Birthday</h4>
      <div>
        <DatePicker
          allowClear
          inputReadOnly={false}
          format='DD-MM-YYYY'
          onChange={(date, dateString) => setBirthday(dateString)}
        />
      </div>

      <Button className='mt-4' onClick={handleCreate}>
        Create
      </Button>

      <div className='flex items-center mt-3'>
        <h4>Result: {id}</h4>

        {id && (
          <CopyToClipboard text={id} onCopy={handleCopy}>
            <div className='flex justify-center items-center cursor-pointer ml-2'>
              <FiCopy className='text-primary' />
              <div className='text-primary'>Copy</div>
              {isCopied && <div className='ml-2 text-sm'>Copied</div>}
            </div>
          </CopyToClipboard>
        )}
      </div>
    </div>
  )
}

export default GenerateOne
