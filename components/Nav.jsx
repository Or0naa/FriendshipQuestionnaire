import NavLink from './NavLink'
export default function Nav() {

   return (
      <div dir="auto" className='bg-theme-accent text-primary-50 p-4 flex gap-4 sticky top-0 left-0 w-full z-10'>
         <NavLink href='/'>בית</NavLink>
         <NavLink href='/allQuestionaires'>כל השאלונים</NavLink>
         <NavLink href='/search'>חיפוש</NavLink>
         <NavLink href='/create'>יצירת שאלון חדש</NavLink>
      </div>
   )
}