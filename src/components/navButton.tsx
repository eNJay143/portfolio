import { motion } from "framer-motion";

interface NavButtonProps {
    name: string;
    onClick: () => void;
    isHovered: boolean;
    onMouseEnter: () => void;
}

const NavButton = ({ name, onClick, isHovered, onMouseEnter }: NavButtonProps) => {
    return (
        <button
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            style={{ padding: "10px" }}
            className="relative flex items-center justify-center rounded-xl bg-transparent text-foreground/80 hover:text-secondary-foreground transition-colors text-sm font-medium font-sans cursor-pointer outline-none"
        >
            {isHovered && (
                <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-secondary rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
            )}
            <span className="relative z-10">{name}</span>
        </button>
    );
};

export default NavButton;
