import ReactSelect from 'react-select';
import useSWR from 'swr';

const fetchModels = () => fetch('/api/getModels').then(res => res.json());

export default function ModelsSelect() {
  const { data, isLoading } = useSWR('models', fetchModels);
  const { data: model, mutate: setModel } = useSWR('model', {
    fallbackData: 'text-davinci-003',
  });

  return (
    <ReactSelect
      className='rounded-md text-sm'
      isSearchable
      isLoading={isLoading}
      menuPosition='fixed'
      classNames={{
        control: state => 'bg-transparent border border-white/20 py-1 text-white',
        option: () => 'bg-[#202123] hover:bg-gray-500/10 rounded-md',
        placeholder: () => 'text-white',
        menuList: () => 'bg-[#202123]',
        singleValue: () => 'text-white',
      }}
      placeholder={model}
      defaultValue={model}
      onChange={e => setModel(e.value)}
      options={data}
    />
  );
}
