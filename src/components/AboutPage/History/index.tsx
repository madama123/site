import { useTranslation } from 'react-i18next'

const History = () => {
    const {t} = useTranslation();
  return (
    <section className='px-5 lg:px-16 mb-12'> 
        <div className='flex flex-col justify-center items-center
        text-center'>
            <h1 className='mb-4 font-bold text-3xl text-blue-primary'>{t("about.history.titre")}</h1>
            <p>{t("about.history.paraph")}</p>
        </div>
    </section>
  )
}

export default History