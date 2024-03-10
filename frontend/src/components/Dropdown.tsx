import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { DropdownProps } from "types";

const Dropdown = ({
  label,
  values,
  width,
  filters,
  handleFilter,
}: DropdownProps) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="popover-btn">
            {label}
            {open ? (
              <ChevronUp className="ml-10" />
            ) : (
              <ChevronDown className="ml-10" />
            )}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="enter-transition"
            enterFrom="enter-from-transition"
            enterTo="enter-to-transition"
            leave="leave-transition"
            leaveFrom="leave-from-transition"
            leaveTo="leave-to-transition"
          >
            <Popover.Panel className={`popover-panel ${width}`}>
              <div className="dropdown">
                {values.map((value) => (
                  <div className="dropdown-item" key={value}>
                    <div className="flex pl-4">
                      <input
                        type="checkbox"
                        className="dropdown-item-checkbox"
                        checked={filters[value]}
                        onChange={({ target: { checked } }) =>
                          handleFilter(value, checked)
                        }
                      />
                      <span className="dropdown-item-label">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Dropdown;
