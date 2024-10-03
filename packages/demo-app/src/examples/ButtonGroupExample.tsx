/*
 * Copyright 2022 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react";

import { Button, ButtonGroup, Intent } from "@blueprintjs/core";

import { ExampleCard } from "./ExampleCard";

export const ButtonGroupExample = React.memo(() => {
    return (
        <div className="example-row">
            <ExampleCard label="ButtonGroup" width={325}>
                {Object.values(Intent).map(intent => (
                    <ButtonGroup key={`${intent}-button-group`}>
                        <Button intent={intent} icon="database" text="Queries" />
                        <Button intent={intent} icon="function" text="Functions" />
                        <Button intent={intent} icon="cog" text="Options" />
                    </ButtonGroup>
                ))}
            </ExampleCard>
        </div>
    );
});

ButtonGroupExample.displayName = "DemoApp.ButtonGroupExample";
