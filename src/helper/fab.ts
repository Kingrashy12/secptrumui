type PositionRightType = { top: number; right: number };
type PositionLeftType = { top: number; left: number };
type OffsetType = { x: number; y: number };
type SetPositionLeftType = React.Dispatch<
  React.SetStateAction<PositionLeftType>
>;
type SetPositionRightType = React.Dispatch<
  React.SetStateAction<PositionRightType>
>;
type SetOffsetType = React.Dispatch<React.SetStateAction<OffsetType>>;
type SetStateBool = React.Dispatch<React.SetStateAction<boolean>>;

const dragFun = {
  right: {
    desktop: {
      mouseDown: function (
        e: React.MouseEvent,
        setIsDragging: SetStateBool,
        setOffset: SetOffsetType
      ) {
        setIsDragging(true);
        setOffset({
          x: e.clientX,
          y: e.clientY,
        });
      },
      mouseMove: function (
        e: React.MouseEvent,
        setPosition: SetPositionRightType,
        isDragging: boolean,
        offset: OffsetType,
        setOffset: SetOffsetType
      ) {
        if (isDragging) {
          const deltaX = e.clientX - offset.x;
          const deltaY = e.clientY - offset.y;

          setPosition((prevPosition) => ({
            top: prevPosition.top + deltaY,
            right: prevPosition.right - deltaX,
          }));

          setOffset({
            x: e.clientX,
            y: e.clientY,
          });
        }
      },
    },
    mobile: {
      start: function (
        e: any,
        setIsDragging: SetStateBool,
        setOffset: SetOffsetType
      ) {
        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;
        setIsDragging(true);
        setOffset({
          x: clientX,
          y: clientY,
        });
      },
      handleMove: function (
        e: any,
        isDragging: boolean,
        offset: OffsetType,
        setPosition: SetPositionRightType,
        setOffset: SetOffsetType
      ) {
        if (isDragging) {
          const clientX = e.clientX || e.touches[0].clientX;
          const clientY = e.clientY || e.touches[0].clientY;

          const deltaX = clientX - offset.x;
          const deltaY = clientY - offset.y;

          setPosition((prevPosition) => ({
            top: prevPosition.top + deltaY,
            right: prevPosition.right - deltaX,
          }));

          setOffset({
            x: clientX,
            y: clientY,
          });
        }
      },
    },
  },
  left: {
    desktop: {
      mouseDown: function (
        e: React.MouseEvent,
        setIsDragging: SetStateBool,
        setOffset: SetOffsetType
      ) {
        setIsDragging(true);
        setOffset({
          x: e.clientX,
          y: e.clientY,
        });
      },
      mouseMove: function (
        e: React.MouseEvent,
        setPosition: SetPositionLeftType,
        isDragging: boolean,
        offset: OffsetType,
        setOffset: SetOffsetType
      ) {
        if (isDragging) {
          const deltaX = e.clientX - offset.x;
          const deltaY = e.clientY - offset.y;

          setPosition((prevPosition) => ({
            top: prevPosition.top + deltaY,
            left: prevPosition.left - deltaX,
          }));

          setOffset({
            x: e.clientX,
            y: e.clientY,
          });
        }
      },
    },
    mobile: {
      start: function (
        e: any,
        setIsDragging: SetStateBool,
        setOffset: SetOffsetType
      ) {
        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;
        setIsDragging(true);
        setOffset({
          x: clientX,
          y: clientY,
        });
      },
      handleMove: function (
        e: any,
        isDragging: boolean,
        offset: OffsetType,
        setPosition: SetPositionLeftType,
        setOffset: SetOffsetType
      ) {
        if (isDragging) {
          const clientX = e.clientX || e.touches[0].clientX;
          const clientY = e.clientY || e.touches[0].clientY;

          const deltaX = clientX - offset.x;
          const deltaY = clientY - offset.y;

          setPosition((prevPosition) => ({
            top: prevPosition.top + deltaY,
            left: prevPosition.left - deltaX,
          }));

          setOffset({
            x: clientX,
            y: clientY,
          });
        }
      },
    },
  },
};

export const { right, left } = dragFun;
