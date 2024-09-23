export const usageCode = {
  quickStart: `
import { Button, toast, useTheme } from 'secptrum-ui'

export default function Home() {

 const { theme } = useTheme();

  retrun(
    <Button
     size="lg"
     radius="lg"
     onClick={() => toast.success("This is a success message!")}
    >
      Make a toast
    </Button>
  );
};
      
    `,
  theme: `
import { ThemeProvider } from "secptrum-ui";

export default function App(){
    <ThemeProvider>
       ...
    </ThemeProvider>,
  };
);
    `,
};
