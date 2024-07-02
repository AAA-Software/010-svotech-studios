import { constructScheduleMetadata } from "@/lib/utils";

export const metadata = constructScheduleMetadata();
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full">{children}</div>;
};

export default RootLayout;
