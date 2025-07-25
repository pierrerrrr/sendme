import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
}

export function EmailTemplate({ firstName }: EmailTemplateProps) {
    return (
        <div>
            <h1>Thanks for signing up!</h1>
            <p>Were excited to have you on board!</p>
        </div>
    );
}