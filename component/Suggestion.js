import React, { useEffect, useState } from "react";
import minifaker from "minifaker";
import "minifaker/locales/en";
import SuggestionPerson from "./SuggestionPerson";
const Suggestion = () => {
    const [sugUsers, setSugUsers] = useState(false);
    useEffect(() => {
        const result = minifaker.array(2, (i) => ({
            id: i,
            username: minifaker.username({ locale: "en" }),
            job: minifaker.jobTitle({ local: "en" }),
        }));
        setSugUsers(result);
    }, []);

    if (sugUsers)
        return (
            <section className="grid py-4 gap-3">
                {sugUsers.map((Suggestion) => {
                    return <SuggestionPerson Suggestion={Suggestion} />;
                })}
            </section>
        );
};

export default Suggestion;
