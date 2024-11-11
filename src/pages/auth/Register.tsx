import AccountInfo from "@/components/multiStepForm/AccountInfo";
import membershipInfo from "@/components/multiStepForm/MembershipInfo";
import PersonalInfo from "@/components/multiStepForm/PersonalInfo";
import PanelContent from "@/components/section";
import { Button } from "@/components/ui/button";
import { getClass } from "@/lib/getClass";
import { useMemo, useState } from "react";
import desktop from "@/assets/images/bg-sidebar-desktop.svg";
import mobile from "@/assets/images/bg-sidebar-mobile.svg";
import thankyouIcon from "@/assets/images/icon-thank-you.svg";
import AddressInfo from "@/components/multiStepForm/AddressInfo";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

const steps = [
  {
    stepName: "Membership Info",
    title: "Membership info",
    description: "Enroll 10 members  to attain active membership status.",
    content: membershipInfo,
    id: "membershipInfo",
  },
  {
    stepName: "Personal Info",
    title: "Personal info",
    description: "Please provide your personal Information",
    content: PersonalInfo,
    id: "personal",
  },

  {
    stepName: "Address Info",
    title: "Address Information",
    description: "",
    content: AddressInfo,
    id: "plan",
  },
  {
    stepName: "Account Info",
    title: "Account Information",
    description: "Please Provide Your password with 4 Digit Pin.",
    content: AccountInfo,
    id: "auth",
  },
];

const Register = () => {
  const [selectedId, setSelectedId] = useState("membershipInfo");
  const [isCompleted, setIsCompleted] = useState(false);
  const [info, setInfo] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  

  const handleConfirmSubmit = () => {
    console.log(info);
    setIsCompleted(true);
    setIsOpen(false);
  };


  const currentStep = useMemo(() => {
    return steps.find((step) => step.id === selectedId);
  }, [selectedId]);

  const CurrentStepContent = currentStep.content ?? (() => null);

  const currentStepIndex = steps.findIndex(
    (step) => step.id === currentStep.id
  );

  const completionStatus = currentStepIndex / (steps.length - 1);

  const updateInfo = (id) => (data) => {
    setInfo((prev) => ({ ...prev, [id]: data }));
    onNext(); // moves to next step
  };

  const onNext = () => {
    if (completionStatus === 1) return; // no next steps

    const nextId = steps[currentStepIndex + 1].id;
    if (nextId) setSelectedId(nextId);
  };
  const onGoBack = () => {
    if (completionStatus === 0) return; // no back steps
    const backId = steps[currentStepIndex - 1].id;
    if (backId) setSelectedId(backId);
  };
  const goto = (id) => setSelectedId(id);

  const onComplete = () => {
    setIsCompleted(true);
    console.log(info);
  };

  return (
    <main className="min-h-screen bg-neutral-300 grid place-items-center p-5">
    <div className="font-body sm:flex sm:w-full sm:gap-10 sm:bg-white sm:p-5 sm:rounded-2xl sm:max-w-5xl">
      <nav className="z-0 fixed sm:relative   top-0 inset-x-0 isolate flex justify-center sm:justify-between items-center sm:items-start w-full sm:max-w-xs">
        <picture className="w-full sm:h-full sm:rounded-lg sm:overflow-hidden">
          <source media="(max-width: 639px)" srcSet={mobile} />
          <source media="(min-width: 640px)" srcSet={desktop} />
          <img
            className="h-[250px] sm:h-full w-full  block object-cover"
            src={desktop}
            alt={"banner with blobs"}
          />
        </picture>
        <ul className="absolute flex sm:grid gap-4  sm:gap-8 mb-10 sm:m-10">
          <div className="text-white font-extrabold text-2xl hidden md:block">
            WELCOME TO BPP
          </div>{" "}
          {steps.map((step, i) => (
            <li
              className={getClass(
                "group-odd: flex items-center gap-3",
                !Object.prototype.hasOwnProperty.call(info, step.id) &&
                  step.id !== selectedId &&
                  "grayscale opacity-60 pointer-events-none cursor-not-allowed"
              )}
              key={i}
            >
              <Button
                onClick={() => setSelectedId(step.id)}
                variant="ghost"
                className={getClass(
                  "p-0 aspect-square w-10 text-white group-hover:bg-primary-100 group-hover:text-primary-800 flex justify-center items-center rounded-full ring-1 ring-white group-hover:ring-[bg-primary-100]",
                  selectedId === step.id && "bg-primary-100 text-primary-800"
                )}
              >
                {i + 1}
              </Button>
              <div className="hidden sm:grid w-full">
                <p className="text-white font-thin text-xs">STEP {i + 1}</p>
                <Button
                  className="justify-start h-auto p-0 uppercase text-white hover:text-neutral-400 font-bold m-0"
                  onClick={() => setSelectedId(step.id)}
                  variant="ghost"
                >
                  {step.stepName}
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </nav>
      {isCompleted ? (
        <article className="z-10 absolute sm:relative left-0 right-0 top-[12rem] sm:top-0 mx-auto  p-10 bg-white w-11/12 sm:w-full  rounded-2xl sm:rounded-none min-h-fit flex flex-col items-center justify-center">
          <img src={thankyouIcon} alt={"Purchase completed"} />

          <p className="text-primary-800 font-bold text-3xl my-5">Thank you!</p>
          <p className="text-center text-lg text-neutral-500">
            Thanks for your Signup! We hope you have Fun using
            our platform. If you ever need support, please feel free to email us
            at bpp.headoffice@gmail.com.
          </p>
        </article>
      ) : (
        <>
        <PanelContent
          title={currentStep.title}
          description={currentStep.description}
          panelCompletionStatus={completionStatus}
          >
          <CurrentStepContent
            updateInfo={updateInfo(currentStep.id)}
            goto={goto}
            defaultState={info}
            onComplete={onComplete}
            onGoBack={onGoBack}
          />
        </PanelContent>
      </>
      )}
    </div>
    </main>
  );
};

export default Register;
