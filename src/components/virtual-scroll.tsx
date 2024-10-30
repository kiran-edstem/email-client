'use client'
import { ReactElement, ReactNode, useState } from "react";

interface VirtualScrollProps {
    rowHeight: number,
    totalItems: number,
    items: ReactElement[],
    visibleItemsLength: number,
    containerHeight: string,
}
const VirtualScroll = ({
    rowHeight,
    totalItems,
    items,
    visibleItemsLength,
    containerHeight,
}: VirtualScrollProps) => {
    const totalHeight = rowHeight * totalItems;
    const [scrollTop, setScrollTop] = useState(0);
    const startNodeElem = Math.ceil(scrollTop / rowHeight);
    const visibleItems = items?.slice(
        startNodeElem,
        startNodeElem + visibleItemsLength
    );
    const offsetY = startNodeElem * rowHeight;

    const handleScroll = (e: React.UIEvent<HTMLElement>) => {
        setScrollTop(e?.currentTarget?.scrollTop);
    };

    return (
        <div
            style={{
                height: containerHeight,
                overflow: "auto",
            }}
            onScroll={handleScroll}
        >
            <div style={{ height: totalHeight }}>
                <div style={{ transform: `translateY(${offsetY}px)` }}>
                    {visibleItems}
                </div>
            </div>
        </div>
    );
};

export default VirtualScroll;


// https://vedanshmehra.hashnode.dev/virtual-scrolling-in-react-implementation-from-scratch-and-using-react-window