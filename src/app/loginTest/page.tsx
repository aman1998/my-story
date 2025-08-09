import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@shared/ui/dialog";
import HomeView from "@views/HomeView";

const LoginTestPage = () => {
  return (
    <>
      <HomeView />
      <Dialog open={true}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <div>LoginTestPage</div>
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LoginTestPage;
