import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const input_modal = () => {
    const [isClose, setIsClose] = useState(false);

    
    const handleIsClose = () => {
        setIsClose(true);
    };
    
    const handleOverlayClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (event.target === event.currentTarget) {
        handleIsClose();
        }
    };
    
    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
        handleIsClose();
        }
    };
    
    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
        document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);
    return !isClose ? (
        <div onClick={handleOverlayClick} className= "fixed z-50 top-0 left-0 right-0 bottom-0 bg-[#0000008a] flex justify-center items-center">
            <div className="font-['pretendard'] w-[300px] h-[200px] sm:w-[580px] sm:h-[290px] bg-[#FFF] flex-shrink-0 fixed rounded-[3px] z-20">
                <button onClick={handleIsClose} className="ml-[280px] h-[22px] sm:h-[30px] sm:ml-[550px] flex-col items-center flex justify-center">
                <Image src="/assets/images/layout/close.svg" width={36} height={38} alt="close" className="w-[18px] h-[20px] sm:w-[25px] sm:h-[25px]"/>
                </button>
                <div className="w-[100%] h-[1px] bg-[#D3D3D3]"/>
                <div className="flex flex-col items-center text-center content-center mt-[12px] sm:mt-[40px] leading-normal">
                    <Image src="/assets/images/tickets/divider_medium.svg" alt="ticket" width={52} height={12} className="sm:w-[52px] sm:h-[12px] w-[30px] h-[10px]"/>
                    <p className="font-[700] mt-[12px] text-[16px] sm:text-[24px] leading-[28px]">모든 정보를 입력하셔야 합니다.</p>
                    <p className="mt-[8px] sm:mt-[20px] sm:font-[500] text-[10px] sm:text-[14px] leading-[21px] text-[#4A4A4A]">입력하신 정보를 다시 한번 확인해주세요.</p>
                    <button onClick={handleIsClose}  className="mt-[8px] sm:mt-[20px] felx items-center w-[70px] h-[20px] sm:w-[100px] sm:h-[24px] justify-center rounded-[3px] bg-[#281CFF] text-[white] text-[10px] sm:text-[12px] font-[700] leading-[17px] text-center">다시 입력하기</button>
                    <Link href="freshman_ticket/delete">
                    <button className="mt-[12px] sm:mt-[20px] felx items-center  w-[85px] h-[20px] sm:w-[120px] sm:h-[24px] justify-center rounded-[3px] bg-[#939393] text-[white] text-[10px] sm:text-[12px] font-[700] leading-[17px] text-center">예매내역 확인하기</button>
                    </Link>
                </div>
                </div>
        </div>
    ): null;
};

export default input_modal;