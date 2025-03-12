import {StyledFieldContainer, 
        InputAndIconContainer, 
        StyledField, 
        IconButton, 
        CalendarIcon,
        ErrorMessage,
        SuccessMessage, 
        } from './FieldInputAuth.styled';
import AirDatepicker from 'air-datepicker';
import localeEn from 'air-datepicker/locale/en';
import 'air-datepicker/air-datepicker.css';


export const FieldInputAuthBirthdate = ({ errors, touched, setFieldValue}) => {
  
  let calendar;

  function handleClickCalendarOverlay(){

    let date_;
    const dateInputValue = document.getElementById('birthdate').value;
    
    const parts = dateInputValue.split('/');
    const curDateStr = parts[2] + "-" + parts[1] + "-" + parts[0] + "T00:00:00";
    
    if (isNaN(new Date(curDateStr))){   date_ = new Date("1900-01-01T00:00:00");
    }else{                              date_ = new Date(curDateStr);  }

    calendar.selectDate(date_ , { updateTime: true, silent: false });
    window.removeEventListener('keydown', handleClickEsc);    
  }

  function handleClickEsc({code}){

    if (code === 'Escape'){

      window.removeEventListener('keydown', handleClickEsc);
      handleClickCalendarOverlay();
      
    };
  }

  function handleClickDate(setFieldValue){

    const dateInput = document.getElementById('birthdate');

    if (dateInput) {      

      calendar = new AirDatepicker(dateInput, {
        isMobile: true,
        autoClose: true,
        dateFormat: 'dd/MM/yyyy',
        locale: localeEn,
        keyboardNav: true,
        maxDate: new Date(), 
        onSelect: ({formattedDate}) => {
          setFieldValue('birthdate', formattedDate);
          calendar.destroy();
          window.removeEventListener('keydown', handleClickEsc);
        },        
        position({$datepicker, $target, $pointer}) {
          let coords = $target.getBoundingClientRect(),
              dpHeight = $datepicker.clientHeight,
              dpWidth = $datepicker.clientWidth;
      
          let top = coords.y + 50;
          let left = coords.x + coords.width - 100;
      
          $datepicker.style.left = `${left}px`;
          $datepicker.style.top = `${top}px`;
      
          $pointer.style.display = 'none';
      },
      });
      
      calendar.show();

      const overlay = document.querySelector('.air-datepicker-overlay.-active-');
      if (overlay){
        overlay.addEventListener('click', handleClickCalendarOverlay);
        window.addEventListener('keydown', handleClickEsc);
      }
    }
  };
 
  return (
    <>
        <StyledFieldContainer>
          
          <InputAndIconContainer id="birthdate-div">

            <StyledField id="birthdate" name="birthdate" placeholder="dd/mm/yyyy" autoComplete="off"
              error={errors.birthdate && touched.birthdate ? 'true' : 'false'}
              success={touched.birthdate && !errors.birthdate ? 'true' : 'false'}
            />
            
            <IconButton type="button" onClick={() => { handleClickDate(setFieldValue) }}>

                <CalendarIcon/>

            </IconButton>
          
          </InputAndIconContainer>

        { (errors.birthdate && touched.birthdate) ? <ErrorMessage>{errors.birthdate}</ErrorMessage> : null }
        { (touched.birthdate && !errors.birthdate) ? <SuccessMessage color="#3CBC81">This is an CORRECT birthdate</SuccessMessage> : null }
        
        </StyledFieldContainer>
    </>
  );
};