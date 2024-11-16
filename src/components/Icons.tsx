import { motion } from "motion/react"
type LucideProps = {
  color: string;
  className: string;
};
export const Icons = {
  home: (props: LucideProps) => (
<motion.svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.998 19.998V10.3992L11.999 4L4 10.3992V19.998H19.998Z" stroke={props.color} strokeWidth="1.5" strokeLinejoin="round"/>
<path d="M8.79883 19.9986V13.5986H15.1988V19.9986" stroke={props.color} strokeWidth="1.5" strokeLinejoin="round"/>
</motion.svg>

    
  ),
  email: (props: LucideProps) => (
    <motion.svg  {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.6 6H18.4C19.28 6 20 6.675 20 7.5V16.5C20 17.325 19.28 18 18.4 18H5.6C4.72 18 4 17.325 4 16.5V7.5C4 6.675 4.72 6 5.6 6Z" stroke={props.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.5556 7.55566L11.7778 13.0001L4 7.55566" stroke={props.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </motion.svg>
  ),
  keyboard: (props: LucideProps) => (
<motion.svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.6 6H18.4C19.28 6 20 6.675 20 7.5V16.5C20 17.325 19.28 18 18.4 18H5.6C4.72 18 4 17.325 4 16.5V7.5C4 6.675 4.72 6 5.6 6Z" stroke={props.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<rect x="8.7998" y="11.25" width="1.6" height="1.5" rx="0.75" fill={props.color}/>
<rect x="9.59863" y="9" width="1.6" height="1.5" rx="0.75" fill={props.color}/>
<rect x="12" y="9" width="1.6" height="1.5" rx="0.75" fill={props.color}/>
<rect x="14.3994" y="9" width="1.6" height="1.5" rx="0.75" fill={props.color}/>
<rect x="16.7998" y="9" width="1.6" height="1.5" rx="0.75" fill={props.color}/>
<rect x="11.2002" y="11.25" width="1.6" height="1.5" rx="0.75" fill={props.color}/>
<rect x="13.5986" y="11.25" width="1.6" height="1.5" rx="0.75" fill={props.color}/>
<rect x="16" y="11.25" width="2.4" height="1.5" rx="0.75" fill={props.color}/>
<rect x="8.7998" y="13.5" width="6.4" height="1.5" rx="0.75" fill={props.color}/>
<rect x="5.60059" y="13.5" width="2.4" height="1.5" rx="0.75" fill={props.color}/>
<rect x="5.60059" y="11.25" width="2.4" height="1.5" rx="0.75" fill={props.color}/>
<rect x="5.60059" y="9" width="3.2" height="1.5" rx="0.75" fill={props.color}/>
<rect x="16" y="13.5" width="2.4" height="1.5" rx="0.75" fill={props.color}/>
</motion.svg>


  ),

};
