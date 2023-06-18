import React from 'react';
import a from '../assets/certificate/a.png'
import b from '../assets/certificate/b.png'
import c from '../assets/certificate/c.png'
import d from '../assets/certificate/d.png'
import e from '../assets/certificate/e.png'
import f from '../assets/certificate/f.png'
import g from '../assets/certificate/g.png'
import h from '../assets/certificate/h.png'
import i from '../assets/certificate/i.png'
import j from '../assets/certificate/j.png'
import k from '../assets/certificate/k.png'
import l from '../assets/certificate/l.png'
import m from '../assets/certificate/m.png'
import n from '../assets/certificate/n.png'
import o from '../assets/certificate/o.png'
import p from '../assets/certificate/p.png'
import q from '../assets/certificate/q.png'
import r from '../assets/certificate/r.png'
import s from '../assets/certificate/s.png'
import t from '../assets/certificate/t.png'
import u from '../assets/certificate/u.png'
import v from '../assets/certificate/v.png'
import wSSC from '../assets/certificate/wSSC.png'
import xHSC from '../assets/certificate/xHSC.png'
import yBSc from '../assets/certificate/yBSc.png'
import zMSc from '../assets/certificate/zMSc.png'
import './Skills.css'
import { motion, AnimatePresence } from "framer-motion";
const Skills = () => {
    return (
        <div className='body-cer'>
            
            <motion.div className='certificate-image '
            initial={{opacity: "00", }}
            animate={{opacity: "100%", }}
            exit={{opacity: "100%",  }}>
               
                <div className='cer-col cer-1'>
                    <div className='signboard1 mb-4'><img  src={a} alt="" /></div>
                    <div className='signboard1 mb-4'><img  src={b} alt="" /></div>
                </div>

                <div className='cer-col'>
                    <div className='signboard1 mb-4'><img  src={c} alt="" /></div>
                    <div className='signboard1 mb-4'><img  src={d} alt="" /></div>
                </div>

                <div className='cer-col'>
                    <div className='signboard1 mb-4'><img  src={e} alt="" /></div>
                    <div className='signboard1 mb-4'><img  src={f} alt="" /></div>
                </div>

                <div className='cer-col'>    
                    <div className='signboard1 mb-4'><img  src={g} alt="" /></div>
                    <div className='signboard1 mb-4'><img  src={h} alt="" /></div>
                </div>

                <div className='cer-col'>
                    <div className='signboard1 mb-4'><img  src={i} alt="" /></div>
                    <div className='signboard1 mb-4'><img  src={j} alt="" /></div>
                </div>

                <div className='cer-col'>
                    <div className='signboard1 mb-4'><img  src={k} alt="" /></div>
                    <div className='signboard1 mb-4'><img  src={l} alt="" /></div>
                </div>

                <div className='cer-col'>
                    <div className='signboard1 mb-4'><img  src={m} alt="" /></div>
                    <div className='signboard1 mb-4'><img  src={n} alt="" /></div>
                </div>

                <div className='cer-col'>
                    <div className='signboard1 mb-4'><img  src={o} alt="" /></div>
                    <div className='signboard1 mb-4'><img  src={p} alt="" /></div>
                </div>

                <div className='cer-col'>
                    <div className='signboard1 mb-4'><img  src={q} alt="" /></div>
                    <div className='signboard1 mb-4'><img  src={r} alt="" /></div>
                </div>

                <div className='cer-col'>
                    <div className='signboard1 mb-4'><img  src={s} alt="" /></div>
                    <div className='signboard1 mb-4'><img  src={t} alt="" /></div>
                </div>

                <div className='cer-col'>
                    <div className='signboard1 mb-4'><img  src={u} alt="" /></div>
                    <div className='signboard1 mb-4'><img  src={v} alt="" /></div>
                </div>

                <div className='cer-col'>
                    <div className='signboard1 mb-4'><img  src={wSSC} alt="" /></div>
                    <div className='signboard1 mb-4'><img  src={xHSC} alt="" /></div>
                </div>

                <div className='cer-col mb-10'>
                    <div className='signboard1 mb-4'><img  src={yBSc} alt="" /></div>
                    <div className='signboard1 mb-4'><img  src={zMSc} alt="" /></div>
                </div>
               
            </motion.div>
        </div>
    );
};

export default Skills;